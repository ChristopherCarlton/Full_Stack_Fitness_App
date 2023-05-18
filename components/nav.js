import styled from 'styled-components'
import Link from 'next/link';

export default function nav() {
    return <BookWrapper>
        <LinkWrapper>
            <Link href="/">Back </Link>
        {/* </LinkWrapper>
        <LinkWrapper> */}
            <Link href="/posts/workout"> Next</Link>
        </LinkWrapper>
    </BookWrapper>
}

const BookWrapper = styled.article`
    position: absolute;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px
    bottom: 100px;
    right: 100px;
// `


// how do i fix hover also how to i adjust size of this
const LinkWrapper = styled.article`
    position: fixed;
    bottom: 0px;
    right: 0px; 
    padding: 10px
    &:hover {
        color: lightblue;
      }
// `
