import {createClient } from "@supabase/supabase-js"

export default async function request(req, res) {

    const supabaseUrl = process.env.SUPA_URL_KEY

    const supabaseKey = process.env.SUPABASE_KEY

    const supabase = createClient(supabaseUrl, supabaseKey)

    
    if (req.method === "POST") {
        const body = req.body
        console.log("Received:  " + JSON.stringify(body))

        console.log(req.body.indexScore)
        const { data, error } = await supabase
        .from('Workout Index Scores')
        .insert([
        { Score: body.indexScore},
        ])
    }


}

// add a if statement for delete requests and clear out all of the records in your database