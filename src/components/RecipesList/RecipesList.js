import React from 'react';
import PropTypes from 'prop-types';
import List from '../../common/List';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipesList = ({
   recipes,
   recipeOpened,
   handleRecipeClick,
   handleDelete,
   handleEditClick,
}) => (
   <div className="recipes-list">
      <List data={recipes}>
         <RecipeItem
            handleClick={handleRecipeClick}
            handleDeleteClick={handleDelete}
            handleEditClick={handleEditClick}
            recipeOpened={recipeOpened}
         />
      </List>
   </div>
);

RecipesList.propTypes = {
   recipes: PropTypes.arrayOf(PropTypes.object),
   recipeOpened: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   handleRecipeClick: PropTypes.func.isRequired,
   handleDelete: PropTypes.func.isRequired,
   handleEditClick: PropTypes.func.isRequired,
};

RecipesList.defaultProps = {
   recipes: [],
   recipeOpened: false,
};

export default RecipesList;
