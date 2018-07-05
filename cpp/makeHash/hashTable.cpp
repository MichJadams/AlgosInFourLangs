#include <string>
#include <iostream>

class HashTable
{
public: 
    int hashKey(std::string key);
private: 
};
int main(){
    bool hashing = true; 
    int hashArray[100];
    std::string key;
    std::string value; 
    std::string hashedKey;

    HashTable myhash;
    hashedKey = myhash.hashKey("hello");
    value = "some";
    hashArray[12] = "value";

    myhash.hashKey(key);
    // std::cout<< hashArray<< std::endl;
    // do
    // {
    // std::cout << "input your key"<<std::endl;
    // getline(std::cin,key);
    
    // hashedKey = myhash.hashKey(key); //eventually pass in the key here
    // std::cout << "input your value for hashed key number "<< myhash.hashKey(key) <<std::endl;
    // getline(std::cin,value);

    //  std::cout << "continue hashing?"<< myhash.hashKey(key) <<std::endl;
    // getline(std::cin,value);
    // }while(hashing == true);
}

int HashTable::hashKey(std::string key)
{
    // std::cout<<"this is the key passed in"<<key<<std::endl;
    int hashTotal = 0; 
    for (int i = 0;i<key.length();i ++)
    {
        hashTotal = hashTotal + int(key[i]);
        // std::cout << int(key[i])<<std::endl;
    };
    hashTotal = hashTotal% int(key[0]);
    return hashTotal;
}