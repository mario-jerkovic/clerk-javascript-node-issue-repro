import Clerk from '@clerk/clerk-js/headless'

async function main() {
    const clerk = new Clerk('INSERT-KEY-HERE')

    await clerk.load()
}

void main()

