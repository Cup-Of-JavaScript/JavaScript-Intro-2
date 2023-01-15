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
        //throw new Error("test")
        throw new ValidationError('bomb')
        //throw new DataError('data')
    }
    catch (Err) {
        if (Err instanceof ValidationError) {
            console.log("ValidationError")
        }
        if (Err instanceof DataError) {
            console.log("Data")
        }
        // if (Err instanceof Error) {
        //     console.log("ERROR")
        // }
        
    }
}

main()
    

