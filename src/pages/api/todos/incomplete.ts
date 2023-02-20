import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "utils/types";
import { connect } from "utils/connection";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  //Potential Response

  const handleCase: ResponseFuncs = {
    //Repsonse of GET Request
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Todo } = await connect(); // connect to dataBAse
      res.json(await Todo.find({ completed: false }).catch(catcher));
    },
  };

  const response = handleCase[method];

  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
