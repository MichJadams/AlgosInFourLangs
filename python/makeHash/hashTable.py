class HashTable():
    def __init__(self):
        self.arrayIndex = []
        for x in range(0,100):
            self.arrayIndex.append(0)
    def insert(self,key,value):
        keyHash = hash(key)
        if self.arrayIndex[keyHash]==0:
            self.arrayIndex[keyHash] = [value]
        else:
            self.arrayIndex[keyHash].append(value)
    def find(self,key):
        keyHash = hash(key)
        if len(self.arrayIndex[keyHash])==1:
            return self.arrayIndex[keyHash][0]
        else:
            return self.arrayIndex[keyHash]
def hash(key):
    setringKey = str(key)
    CharCodeKey = 0 
    for x in range(0,len(setringKey)):
        CharCodeKey+= ord(setringKey[x])
    first = ord(setringKey[0])
    out = CharCodeKey%first
    return out 

myHashTable = HashTable()
myHashTable.insert('akey','a value!')
myHashTable.insert(123,'numbers??')
print myHashTable.find(123)
print myHashTable.find('akey')
