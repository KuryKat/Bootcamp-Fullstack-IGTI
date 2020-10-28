import React from 'react'
import Candidate from './Card/Candidate/Candidate'
import Card from './Card/Card'
import FlipMove from 'react-flip-move'

export default function Candidates({
    candidates,
    previousVotes,
    previousPercentages,
}) {
    return (
        <div>
            <FlipMove>
                {candidates.map((candidate, index) => {
                    const previousVoteObject = previousVotes.find(
                        item => item.id === candidate.id
                    )
                    const previousVote = !!previousVoteObject
                        ? previousVoteObject.votes
                        : 0

                    const previousPercentageObject = previousPercentages.find(
                        item => item.id === candidate.id
                    )
                    const previousPercentage = !!previousPercentageObject
                        ? previousPercentageObject.percentage
                        : 0

                    return (
                        <div key={candidate.id}>
                            <Card>
                                <Candidate
                                    previousPercentage={previousPercentage}
                                    previousVote={previousVote}
                                    candidate={candidate}
                                    position={index + 1}
                                />
                            </Card>
                        </div>
                    )
                })}
            </FlipMove>
        </div>
    )
}
