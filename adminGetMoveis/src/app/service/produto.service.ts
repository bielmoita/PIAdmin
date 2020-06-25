import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  /*
  CRUD: Create(post), Read(get), Update(put) e Delete(delete).
  */

 //Create
 getAllProdutos(){
   return this.http.get('http://31.220.57.14:8080/postagens')
 }
//READ

 postProduto(produto: Produto) {
   return this.http.post('http://31.220.57.14:8080/postagens', postagem)
 }

 // Update
 putProduto(produto: Produto){
   return this.http.put('http://31.220.57.14:8080/postagens', postagem)
 }

 getByIdProduto(id:number){
   return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
 }

 //DELETE
 deleteProduto(id:number){
   return this.http.delete(`http://31.220.57.14:8080/postagens/${id}`)
 }
//Pesquisar por nome
 findByNome(nome:string){
   return this.http.delete(`http://31.220.57.14:8080/postagens/titulo/${titulo}`)
 }



}
