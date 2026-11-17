

class Devops{

    constructor(concepts){
        this.concepts  = []
    }

    learn(){
        console.log("I am learning devops")
    }

    append(concept){
        const DevopConcept = new Devops(concept)

        return this.concepts.push(DevopConcept)


    }


    list(){
        return this.concepts.forEach(concept => concept)
    }
}


const docker = new Devops.append("docker")
const kubernetes = new Devops.append("kubernetes")
const lists = new Devops.list()
const devops = new Devops()
console.log(devops.learn())
console.log(lists)