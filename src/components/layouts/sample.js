import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Sample' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name="description" content="ipay"/>
            <meta name="keywords" content="ipay"/>
            <meta name="robots" content="index,follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>

        </Head>
        <header>
            <nav>
                <Link href='/'><a>Home</a></Link> |
                <Link href='/about'><a>About</a></Link> |
                <Link href='/contact'><a>Contact</a></Link>
            </nav>
        </header>

        { children }

        <footer>
        </footer>
    </div>
)