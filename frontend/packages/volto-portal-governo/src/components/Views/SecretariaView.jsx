import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers';
import { Container } from '@plone/components';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
//import '../../theme/_secretariaView.scss';

const SecretariaView = (props) => {
  const { content, location } = props;
  const { telefone, email, endereco, complemento, estado, cidade, cep } =
    content;
  const path = getBaseUrl(location?.pathname || '');

  return (
    <Container id="page-document" className="view-wrapper secretaria-view">
      <RenderBlocks {...props} path={path} />
      <Container className="contato">
        <Container className="telefone">
          <span>Telefone</span>: <span>{telefone}</span>
        </Container>
        <Container className="email">
          <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
        </Container>
        <Container className="endereco">
          <span>Endereço</span>:{' '}
          <span>
            {endereco} {complemento} {estado.title} {cidade} {cep}
          </span>
        </Container>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SecretariaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
  }).isRequired,
};

export default SecretariaView;
