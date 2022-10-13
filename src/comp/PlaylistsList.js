
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import ColorContext from "../context/colorContext";


export default function PlaylistsList({data}) {
  const colors = useContext(ColorContext);
	const styles = {
		viewAll: css`
			color: ${colors.primary};
		`,
		fontColor: css`
			color: ${colors.text};
		`,
	};
  return   (
    <Link to={`playlistdetails/${data.id}`}>
     <Container >
        <ul>
          <h3 className="text-center text-lg" css={styles.fontColor}>{data.name}</h3>
          <p className="text-center text-m" css={styles.fontColor}>By: {data.owner.display_name}</p>
        </ul>
      <div className="flex justify-center">
        <img className="scale-75 rounded-lg -mt-8" src={data.images[0].url} alt="playlist cover" />
      </div> 
    </Container>
    </Link>
      )
  }

  const Container = styled.div`
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;
      &:active {
        background-color: white;
      }
    
    &::-webkit-scrollbar {
      width: 0.7rem;
      height: 5rem;
      &-thumb {
        background-color: #b3b3b3;
        border-radius: 0.5rem;
      } 
    }
`

  
  
