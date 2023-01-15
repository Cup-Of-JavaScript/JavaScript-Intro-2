class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = "ValidationError"
    }
}

class DataError extends Error {
    constructor(message) {
      super(message)
      this.name = "DataError"
    }
}

const main = () => {
    try {
        //throw new Error("I am broken.")
        //throw new ValidationError('Firstname is required.')
        throw new DataError('Foreign key error.')
    }
    catch (Err) {
        if (Err instanceof ValidationError) {
            console.log(Err)
        }
        if (Err instanceof DataError) {
            console.log(Err)
        }
        if (Err instanceof Error) {
           console.log("Here")
        }
    }
}

main()
    

