// A util us
type EnvStruct = {
    name: string
    value: string | undefined
}

// getEnv is a structure of the environment variables
export function getEnv(url: string): EnvStruct {
    const devBaseURL = process.env.DEV_BASE_URL
    const uatBaseURL = process.env.UAT_BASE_URL
    const prodBaseURL = process.env.PRODUCTION_BASE_URL

    const env: EnvStruct[] = [
        {
            name: "uat",
            value: uatBaseURL
        },
        {
            name: "prod",
            value: prodBaseURL
        },
        {
            name: "dev",
            value: devBaseURL
        }
    ]
    return env.filter(i => i.name == url)[0]
    
}