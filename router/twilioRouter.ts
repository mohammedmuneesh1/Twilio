
import Router from "express";
import { tryCatch } from "../middleware/tryCatch";
import { outgoingCall,handleIncomingCall,outgoingCallWithInput,trailFn,outgoingMessage } from "../controller/twilioController";

export const router = Router();

router.route('/send-message').post(tryCatch(outgoingMessage))
router.route('/call').post(tryCatch(outgoingCall))
router.route('/incoming-call').post(tryCatch(handleIncomingCall))
router.route('/call/otp').post(tryCatch(outgoingCallWithInput))
router.route('/trail').get(tryCatch(trailFn))







