import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { title } from 'process'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(({ id, title, description }) =>
                (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description} />
                ))
                }
            </BentoGrid>
        </section>
    )
}

let items = [
    {
        id: 1,
        title: 'Title1',
        description: 'Description1',

    }
]

export default Grid