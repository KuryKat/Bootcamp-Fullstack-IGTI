import React from 'react'
import { flexRow, enfasisAndMargin } from './Preloader.module.css'

export default function Preloader({ description }) {
    return (
        <div className={`${flexRow}`}>
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <div className={enfasisAndMargin}>{description}</div>
        </div>
    )
}
