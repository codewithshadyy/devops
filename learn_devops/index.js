

class Devops{

    constructor(){
        this.concepts  = []
    }

    learn(){
        console.log("I am learning devops")
    }

    append(concept){
        const DevopConcept = new Devops(concept)

        return this.concepts.push(DevopConcept)


    }
}


const docker = new Devops.append("docker")
const kubernetes = new Devops.append("kubernetes")
const devops = new Devops()
console.log(devops.learn())