import React from 'react';
import './not-found.scss';
import { Link } from 'gatsby'

function NotFound () {
  return (
    <div className="not-found">
      <div className="card-title">
        페이지를 찾을 수 없습니다.
      </div>
      <div className="card-description">
        요청하신 페이지를 찾을 수 없습니다. 다른 페이지를 이용해주세요. <br/>
      </div>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

export default NotFound;
