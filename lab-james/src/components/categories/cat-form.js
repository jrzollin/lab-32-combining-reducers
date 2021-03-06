import React from 'react';
import {connect} from 'react-redux';

import {createCategory} from './cat-actions.js';

import '../../style/components/modal.scss';

class CatForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.budget = parseInt(this.state.budget);
    this.state.remaining = this.state.budget;
    this.props.handleCreateCategory(Object.assign({}, this.state));
    this.props.toggleCatForm();
  }

  render(){
    return(
      <div className="overlay">
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <a className="close-button" onClick={this.props.toggleCatForm}>x</a>
            <label className="form-field" htmlFor="name">Name:
              <input type="text" id="name" onChange={this.handleChange} />
            </label>
            <label className="form-field" htmlFor="budget">Budget:
              <input type="number" id="budget" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateCategory: category => dispatch(createCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatForm);
