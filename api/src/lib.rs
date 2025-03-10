#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_contrib;
use rocket_cors;

#[macro_use]
extern crate diesel;

use validator;
#[macro_use]
extern crate validator_derive;

mod auth;
mod config;
mod db;
mod errors;
mod models;
mod routes;
mod schema;

use rocket_contrib::json::JsonValue;

#[catch(404)]
fn not_found() -> JsonValue {
    json!({
        "status": "error",
        "reason": "Resource was not found."
    })
}

pub fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount(
            "/api",
            routes![
                routes::users::post_users,
                routes::users::post_users_login,
                routes::users::put_user,
                routes::users::get_user,
                routes::articles::post_articles,
                routes::articles::put_articles,
                routes::articles::get_article,
                routes::articles::delete_article,
                routes::articles::favorite_article,
                routes::articles::unfavorite_article,
                routes::articles::get_articles,
                routes::articles::get_articles_feed,
                routes::articles::post_comment,
                routes::articles::get_comments,
                routes::articles::delete_comment,
                routes::tags::get_tags,
                routes::profiles::get_profile,
                routes::profiles::follow,
                routes::profiles::unfollow,
                routes::misc::healthz
            ],
        )
        .attach(db::Conn::fairing())
        .attach(rocket_cors::Cors::default())
        .register(catchers![not_found])
}
// fn cors_options() -> rocket_cors::CorsOptions {
//     let allowed_origins = AllowedOrigins::some_exact(&["https://localhost"]);
//     rocket_cors::CorsOptions {
//         allowed_origins,
//         allowed_methods: vec![Method::Get, Method::Options, Method::Post].into_iter().map(From::from).collect(),
//         allowed_headers: AllowedHeaders::All,
//         allow_credentials: true,
//         ..Default::default()
//     }
// }
