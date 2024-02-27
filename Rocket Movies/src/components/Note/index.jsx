import { Container, MiniStars } from './styles';
import { Tag } from '../Tags';

import { RiStarFill, RiStarLine } from 'react-icons/ri'

export function Note({ data, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
           
            <MiniStars>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </MiniStars>
            
            <h2>{data.content}</h2>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}