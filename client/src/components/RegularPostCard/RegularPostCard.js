import { Heading, Tag } from 'components';
import { postDate, propTypeInterface } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  image,
  textContainer,
  title,
  time,
} from './RegularPostCard.module.scss';

const RegularPostCard = ({ postData, className, ...restProps }) => {
  const { postTitle, postingDate, imageUrl, mountainName } = postData;

  const containerClasses = classNames(className.container, container);

  return (
    <div className={containerClasses}>
      <img src={imageUrl} alt="" className={image} />
      <div className={textContainer}>
        <Heading level={3} className={title}>
          {postTitle}
        </Heading>
        <time dateTime={postDate.getPostDate(postingDate)} className={time}>
          {postDate.getPostDateInKorean(postingDate)}
        </time>
        <Tag
          type="mountain"
          contents={{
            mountainName,
          }}
        ></Tag>
      </div>
    </div>
  );
};

RegularPostCard.defaultProps = {
  postData: {
    postTitle: '',
    imageUrl: '',
    mountainName: '',
    postingDate: {},
  },
  className: {},
};

RegularPostCard.propTypes = {
  postData: PropTypes.shape(propTypeInterface.regularPostCardData).isRequired,
  className: PropTypes.object,
};

export default RegularPostCard;