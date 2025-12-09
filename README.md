```
make gen-node
```
Untuk generate _grpc.js dan _pb.js

```
make gen-go
```
Untuk generate _grpc.go dan _pb.go

Gunakan WSL jika menjalankan di Windows
Open terminal WSL > Clone dari WSL > lakukan generate seperti di atas

Di servicemu untuk nodejs silahkan jalankan:
```
npm install git+ssh://git@github.com/xrmzy/central-proto.git
```
Lalu jalankan command ini
```
ls node_modules/@xrmzy/proto
```
dan pastikan ada hasilnya seperti ini 
```
README.md  index.js  package.json  proto
```