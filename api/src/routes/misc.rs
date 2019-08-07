use rocket_contrib::json::{JsonValue};
use rocket::http::{Cookies, Cookie};

#[get("/healthz")]
pub fn healthz(mut cookies: Cookies<'_>,) -> JsonValue {
    cookies.add(Cookie::new("test", "hoge"));
    json!({"status": "healthy"})
}