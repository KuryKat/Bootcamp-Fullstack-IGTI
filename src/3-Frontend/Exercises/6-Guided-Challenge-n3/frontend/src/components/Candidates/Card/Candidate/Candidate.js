import React from 'react'
import Info from './Info/Info'
import Name from './Info/Name/Name'
import Percentage from './Info/Percentage/Percentage'
import Popularity from './Info/Popularity/Popularity'
import Votes from './Info/Votes/Votes'
import Picture from './Picture/Picture'
import Position from './Position/Position'
import { flexRow } from './Candidate.module.css'

export default function Candidate({
    candidate: { id, name, votes, percentage, popularity },
    position,
    previousVote,
    previousPercentage,
}) {
    return (
        <div className={flexRow}>
            <Position>{position}</Position>
            <Picture
                description={`Foto de ${name}`}
                ImageSRC={`images/0${id}.jpg`}
            />
            <Info name={name}>
                <Name>{name}</Name>
                <Votes value={votes} previous={previousVote} />
                <Percentage value={percentage} previous={previousPercentage} />
                <Popularity value={popularity} />
            </Info>
        </div>
    )
}
