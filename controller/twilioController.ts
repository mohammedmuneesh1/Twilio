import { Request,Response } from "express";
import {CONSTANT} from "../constants/requestStatus";
import twilio from "twilio"


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber= process.env.TWILIO_PHONE_NUMBER;

const VoiceResponse = twilio.twiml.VoiceResponse;
// const twiml = new VoiceResponse();
const response = new VoiceResponse();

// Create a Twilio client
const twilioClient = twilio(accountSid,authToken)




// TRAIL FUNCTION FOR CHECKING API WORKING 

export async function trailFn (req:Request,res:Response):Promise<Response>{
    return res.status(200).json({status:CONSTANT.SUCCESS,message:"api working fine."})
}

//TWILIO CODE FOR SENDING THE OTP
export async function outgoingMessage (req:Request,res:Response):Promise<Response>{
    let {userPhoneNumber} = req.body;
    console.log(userPhoneNumber)

    let message = await twilioClient.messages.create({
        body:"hello this is from <****> company. your otp is 3453221. Thank you", 
        from:twilioNumber,
        to:`+91${userPhoneNumber}`,
    })
    console.log(message)
    return res.status(200).json({status:CONSTANT.SUCCESS,message:"call has been forward successfully."})
}





//TWILIO CODE FOR SENDING PROGRAMMABLE CALL (PROGRAMMABLE CALLS MEANS ROBOTICS CALLS) 
export async function outgoingCall (req:Request,res:Response):Promise<Response>{
    let {userPhoneNumber} = req.body;
    console.log(userPhoneNumber)
    const call = await twilioClient.calls.create({

        url: 'https://handler.twilio.com/twiml/EH4650420c8c78b6eb9219f9916979f382', // TwiML instructions for the call 
        //THIS  URL IS TWIML BIN . WE CAN CREATE AN XML FILE THERE AND IMPORT  THE URL HERE FOR CALLING 

        to: `+91${userPhoneNumber}`,
        from: twilioNumber as string,
    });
    console.log(call)
    return res.status(200).json({status:CONSTANT.SUCCESS,message:"call has been forward successfully."})
}



async function generateTwiml(req:Request,res:Response):Promise<Response>{
    response.say({ voice: 'Polly.Matthew' }, `Your one-time password is 54321`);
    res.type('text/xml');   
    return res.status(200).send(response.toString());
}


export async function outgoingCallWithInput (req:Request,res:Response):Promise<Response>{
    let {userPhoneNumber} = req.body;
    console.log(userPhoneNumber)
    const call = await twilioClient.calls.create({
        url: 'https://handler.twilio.com/twiml/EH4650420c8c78b6eb9219f9916979f382', // TwiML instructions for the call
        to: `+91${userPhoneNumber}`,
        from: twilioNumber as string,
    });
    console.log(call)



    return res.status(200).json({status:CONSTANT.SUCCESS,message:"call has been forward successfully."})
}











//TWILIO CODE FOR HANDLING CUSTOM CALL  

export async function handleIncomingCall (req:Request,res:Response):Promise<Response>{
      
        // twiml.say('Welcome to our service.');
        // twiml.gather({
        //   numDigits: 1,
        //   action: '/handle-input',
        //   method: 'POST'
        // }).say('Press 1 for marketing, or press 2 for sales.');
        // res.type('text/xml');
        // res.send(twiml.toString());
    //   });

return res.status(200).json({status:CONSTANT.SUCCESS,message:"call handled successfully"})
}


