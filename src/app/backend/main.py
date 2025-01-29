import json
from fastapi import FastAPI, Form,  Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

def carregar_dados():
    try:
        with open('db.json', 'r') as file:
            dados = json.load(file)
            return dados.get('carros', []), dados.get('produtos', []), dados.get('usuarios', [])
    except FileNotFoundError:
        return [], []
    except json.JSONDecodeError:
        return [], []
    
def salvar_dados(carros, produtos, usuarios):
    dados = {
        'carros': carros,
        'produtos': produtos,
        'usuarios': usuarios
              }
    with open('db.json', 'w') as file:
        json.dump(dados, file, indent=4)

carros, produtos, usuarios = carregar_dados()
    
@app.post("/carros/criar")
async def criarCarro(
    nome: str = Form(...),
    email: str = Form(...),
    informacoes: str = Form(...)
):
    car = {
        "carro_id": len(carros) + 1,
        "nome": nome,
        "email": email,
        "informacoes": informacoes,
    }
    carros.append(car)
    salvar_dados(carros, produtos)
    return ('carro adicionado com sucesso')

@app.get("/carros")
async def getCarros():
    return carros


@app.post("/carros/criarProdutos")
async def criarProdutos(
    nome: str = Form(...),
    marca: str = Form(...),
    valor: str = Form(...)
):
    produto = {
        "produto_id": len(produtos) + 1,
        "nome": nome,
        "marca": marca,
        "valor": valor,
    }
    produtos.append(produto)
    salvar_dados(carros, produtos)
    return ('produto adicionado com sucesso')

@app.get("/carros/produtos")
async def getProdutos():
    return produtos

@app.post("/cadastroDeUsuario")
async def cadastroDeUsuario(
    nomeDoUsuario: str = Form(...),
    email: str = Form(...),
    modeloCarro: str = Form(...),
    senha: str = Form(...)
):
    usuario = {
        "nomeDoUsuario": nomeDoUsuario,
        "email": email,
        "modeloCarro": modeloCarro,
        "senha": senha,
    }
    usuarios.append(usuario)
    salvar_dados(carros, produtos, usuarios)
    return ('usuario cadastrado com sucesso')

@app.get("/usuarios")
async def getUsuarios():
    return usuarios


@app.post("/login")
async def login(
    email: str = Form(...),
    senha: str = Form(...)
):
    for usuario in usuarios:
        if usuario['email'] == email and usuario['senha'] == senha:
            return ('usuario logado com sucesso')
    return ('usuario ou senha incorretos')

