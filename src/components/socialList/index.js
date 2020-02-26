import React from "react";
import uuid from "uuid";

import * as S from './styles';

const SocialList = ({ networkArr }) => {
  
  return (
    <S.SocialList>
    {
      networkArr.map((network) => (
        <S.SocialItem key={uuid.v4()}>
          <S.SocialAnchor 
            href={network.url}
            title={network.name}
            target="_blank"
            rel="noopener noreferrer"
            >
              { (network.boxicon_type) ?
                <i
                  name={network.boxicon}
                  className={`bx ${network.boxicon_type}-${network.boxicon}`}
                ></i>
                :
                <i
                  name={network.boxicon}
                  className={`bx bxl-${network.boxicon}`}
                ></i>
              }
            </S.SocialAnchor>
        </S.SocialItem>
      ))
    }
    </S.SocialList>
  )
};
export default SocialList;
