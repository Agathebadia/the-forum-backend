'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      userId: DataTypes.UUID,
      categoryId: DataTypes.UUID,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {},
  );
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};
