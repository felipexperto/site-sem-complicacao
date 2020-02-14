/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import * as S from './styles';
import Avatar from 'src/components/avatar';
import AuthorInfo from 'src/components/authorInfo';
import avatarFelipe from 'src/images/authors/sitesemcomplicacao-felipemarciano.png';
import avatarDaniele from 'src/images/authors/sitesemcomplicacao-danielegama.jpg';

const Bio = ({ authorId }) => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          authors {
            id name intro bio social {
              behance { 
                name url boxicon show
              }
              dribbble { 
                name url boxicon show
              }
              github { 
                name url boxicon show
              }
              instagram { 
                name url boxicon show
              }
              linkedin { 
                name url boxicon show
              }
              pinterest { 
                name url boxicon show
              }
              twitter { 
                name url boxicon show
              }
              custom { 
                name url boxicon boxicon_type show
              }
            }
          }
        }
      }
    }
  `);

  const postAuthorInfo = data.site.siteMetadata.authors.filter(item => item.id === authorId);
  const { name } = postAuthorInfo[0];
  const authorAvatar = authorId === 1 ? avatarFelipe : avatarDaniele;
  
  return (
    <S.BioWrapper>
      <Avatar
        image={authorAvatar}
        label={name}
      />
      <AuthorInfo props={postAuthorInfo[0]} />
    </S.BioWrapper>
  )
}

Bio.defaultProps = {
  authorId: 1,
}

Bio.propTypes = {
  authorId: PropTypes.number,
}

export default Bio
