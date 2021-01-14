import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'


export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`} />),
        title: "Lot's of Destinations",
        desc: "Travel to over 20 unique places",
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`} />),
        title: "Over 100 Trips Booked",
        desc: "100+ trips booked in the last 12 months",
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`} />),
        title: "Fast Support",
        desc: "We respond to all inquiries within 24 hours",
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`} />),
        title: "Best deals",
        desc: "We offer the best prices",
    },
]