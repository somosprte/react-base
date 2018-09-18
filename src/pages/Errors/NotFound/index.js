import React, { Component, Fragment } from 'react';
import { withLayout } from 'hocs';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <div class="account-pages">
          <div class="clearfix" />
          <div class="wrapper-page">
            <div class="ex-page-content text-center">
              <div class="text-error">404</div>
              <h3 class="text-uppercase font-600">Página Não encontrada</h3>
              <p class="text-muted">
                Parece que você pode ter errado o caminho. Não se preocupe ... isso acontece com os melhores. Aqui está
                uma pequena dica que pode ajudá-lo a voltar aos trilhos.
              </p>
              <Link to="/" className="btn btn-success">
                Retornar aos trilhos
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withLayout('Blank')(NotFound);
