// use std::io;



fn main() {

    let mut key = String::new();
    let mut value = String::new();
    println!("input key");

    std::io::stdin().read_line(&mut key)
        .expect("failed to read line");

    let key: u32 = key.trim().parse(){
        Ok(num) => num,
        Err(_) => continue,
    }
    .expect("please input a number!");

    println!("input value for the key {}", key);

    std::io::stdin().read_line(&mut key)
        .expect("failed to read line");

    let hash_key = hash(key);
}

pub fn hash(key: String){
    println!("called a function, with this param {}", key )
}
