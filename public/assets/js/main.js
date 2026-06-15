import { ProdutoService } from "../../services/produto-service";

import {ProdutoService} from "../../services/produto-service";

const ProdutoService = new ProdutoService();

function main() {
    ProdutoService.getProdutos().then((produtos) => {
        console.log(produtos);
    });
}


window.addEventListener("load", main);