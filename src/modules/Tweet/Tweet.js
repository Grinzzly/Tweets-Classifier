import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tweet.less';

export class Tweet extends Component {
  getTime() {
    const currentDate = new Date();

    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }

  getDate() {
    const currentDate = new Date();

    return `${currentDate.getDate()}/
      ${(currentDate.getMonth() + 1)}/
      ${currentDate.getFullYear()}`;
  }

  render() {
    const {
      name,
      nick,
      imageSrc,
      tweet,
    } = this.props;

    return (
      <div className="Message">
        <div className="Message_blurb">

          <div className="Social_profile">
            <div className="Social_profile_img">
              <img src={imageSrc} alt={name} />
            </div>
            <div className="Social_profile_text">
              <p className="Social_profile_name">{name}</p>
              <p className="Social_profile_handle">{nick}</p>
            </div>
          </div>

          <p className="Message_tweet">
            {tweet}
          </p>

          <div className="Social_date">
            <p className="Social_date_calendar">
              { this.getDate() }
            </p>
            <p className="Social_date_time">
              { this.getTime() }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  name: PropTypes.string,
  nick: PropTypes.string,
  imageSrc: PropTypes.string,
  tweet: PropTypes.string,
};

Tweet.defaultProps = {
  name: 'Name',
  nick: '@Handle',
  imageSrc: '',
  tweet: 'Tweet',
};
