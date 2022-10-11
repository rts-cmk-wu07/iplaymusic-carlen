/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from 'react';
import { useSearchParams } from "react-router-dom";
import ColorContext from '../context/colorContext';

export default function PlaylistDetails({data}) {
  var [searchParams, setSearchParams] = useSearchParams()
  const colors = useContext(ColorContext);
	const styles = {
		viewAll: css`
			color: ${colors.primary};
		`,
		fontColor: css`
			color: ${colors.text};
		`,
  }
  return (
    
    <div>
      <h3 className="text-center text-lg" css={styles.fontColor}>{data.name}</h3>
      <p className="text-center text-m" css={styles.fontColor}>By: {data.owner.display_name}</p>
    </div>
    
  )
}
