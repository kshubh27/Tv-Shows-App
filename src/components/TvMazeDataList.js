import React from 'react';
import useApiData from './useApiData';
import './TvMazeDataList.css';

const TvMazeDataList = ({ tvMazeData}) => {
    const apiData = useApiData(tvMazeData);
    return(
        <div className='TvMazeDataList'>
        { apiData.map((tvMazeRecord) => (
            <div className="card">
                <img
                width='600px'
                height="600px"
                src={tvMazeRecord.character.image.original}
                className='picture' 
                alt={tvMazeRecord.character.name}
                />
            
            
            <div className="text">
                <h2>{tvMazeRecord.character.name}</h2>
            </div>
           

            <div className="info">
                <div className="data">
                    <div className="value">
                        {tvMazeRecord.person.birthday}
                    </div>
                </div>
            </div>
            

            <div className="data border">
                <div className="value">
                    {tvMazeRecord.person.country.name}
                </div>
            </div>
            </div>

        ))}
        </div>
        
    );
};

export default TvMazeDataList;