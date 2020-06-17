interface Process {
    env: Env
}

interface Env {
    ENV: string
}

interface GlobalEnvironment {
    process: Process
}

declare var process: Process;