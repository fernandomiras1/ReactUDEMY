import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { restoreExpression } from '../../actions/currentExpression';

const History = ({list = [], restoreExpression}) => <Fragment>
  {list.map((item, index) => <p key={index} onClick={() => restoreExpression(item.expr) }>
      {item.expr} = {item.result}
    </p>)}
</Fragment>

const mapStateToProps = (state) => ({
  list: state.history
});

const mapDispatchToProps = {
  restoreExpression
}

export default connect(mapStateToProps, mapDispatchToProps )(History);