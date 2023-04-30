import { supabase } from "$lib/supabaseClient"

export async function load() {
    const { data } = await supabase
                            .from("shows")
                            .select()
                            .order("name")
    return {
        shows: data.filter(show => show.name != null)
    }
}