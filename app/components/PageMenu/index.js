import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PageMenu = ({ items }) => (
  <Menu size="large" pointing secondary>
    {items}
  </Menu>
);

PageMenu.propTypes = {
  items: PropTypes.node.isRequired,
};

export default PageMenu;
