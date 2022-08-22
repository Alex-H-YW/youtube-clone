import { render, screen } from "@testing-library/react";
import { getPlaylistVideos } from './videos';
import { setupServer } from 'msw/node'
import { rest } from "msw";

const body = {id:"1", name: "JACK"}
const server = setupServer(
    rest.get('https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50', (req, res, ctx) => {
        return res(ctx.json(body))
    })
)
beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(()=> server.close());

  test('should get correct video', async ()=> {

    const result = await getPlaylistVideos();

   expect(result.data).toMatchObject(body);
  });



