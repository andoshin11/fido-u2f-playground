FROM rustlang/rust:nightly as builder

RUN mkdir -p /build/src
RUN cargo install diesel_cli
RUN echo 'fn main() {}' > /build/src/main.rs
COPY Cargo.toml Cargo.lock /build/
WORKDIR /build/
# RUN cargo build --release --locked
RUN cargo build
COPY ./ ./
RUN find src -type f -exec touch {} +  && cargo build
# RUN find src -type f -exec touch {} +  && cargo build --release --locked
RUN chmod +x ./wait-for-it.sh

# CMD ["/build/target/release/fido_u2f_playground"]
