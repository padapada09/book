import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles.module.scss';

export interface ResultRouteParams {
    content_id : string,
    score: string
};

const Result = ({match: {params: {content_id, score}}, history} : RouteComponentProps<ResultRouteParams>) => {

    const star_width = 400;
    const star_height = star_width;
    const color = `hsl(${23 + 37*parseFloat(score)}, ${40 + 70*parseFloat(score)}%, 49%)`;

    return (
        <div style={{height: 'calc(100% - 20px)', display: 'flex', flexDirection: 'column', paddingTop: 20}}>
            <Typography 
            style={{textAlign: 'center'}} 
            color="textPrimary">
                Felicidades por terminar la revisión!
            </Typography>
            <Typography 
            style={{textAlign: 'center'}}
            color="textSecondary">
                El brillo de la estrella representa nuestra estimación de tu nivel de preparación
            </Typography>
            <div style={{display: 'flex', width: '100%', height: star_height, alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <svg 
                className={styles.Star}
                version="1.1"
                id="Capa_1" 
                x="0px" 
                y="0px" 
                viewBox="0 0 477.899 477.899" 
                width={star_width}
                height={star_height}>
                    <g>
                        <g>
                            <path 
                                fill={color} 
                                d="M476.343,183.008c-3.834-12.939-14.932-22.404-28.314-24.149l-127.01-17.545L270.758,21.216
                                C263.42,3.637,243.22-4.664,225.641,2.674c-8.38,3.499-15.043,10.161-18.541,18.541l-50.261,120.098l-127.01,17.545
                                C10.905,161.493-2.3,178.969,0.335,197.892c1.132,8.132,5.119,15.596,11.249,21.058l95.693,85.333L87.616,438.189
                                c-2.13,13.597,4.115,27.144,15.838,34.355c11.558,7.391,26.425,7.115,37.7-0.7l97.775-66.492l97.775,66.56
                                c15.777,10.708,37.248,6.599,47.957-9.178c4.866-7.17,6.859-15.907,5.582-24.477l-19.661-133.956l95.693-85.333
                                C476.436,210.02,480.381,195.931,476.343,183.008z"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <Button
            fullWidth
            variant="contained"
            style={{marginBottom: 20}}
            color="primary"
            onClick={() => history.go(-2)}>
                Volver
            </Button>
        </div>
    );
};

export default Result;
