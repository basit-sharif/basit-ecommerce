/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {
                source:"/api/:path*",
                headers:[
                    {key:"Access-Control-Allow-Credentials",value:"true"},
                    {key:"Access-Control-Allow-Origin",value:"*"},
                    {key:"Access-Control-Allow-Methods",value:"GET,DELETE,PUT,POST"},
                ]
            }
        ]
    },
    experimental:{
        serverActions:true
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io',
                port:"",
                pathname:"/**"
            }
        ]
    }
}

module.exports = nextConfig
