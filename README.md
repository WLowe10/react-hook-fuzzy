
# react-hook-fuzzy

react-hook-fuzzy is a lightweight and easy-to-use React hook for performing fuzzy searches on arrays of objects. It allows you to quickly filter an array based on a search term, returning only the items that match the search criteria.

## Installation

```bash
  npm install react-hook-fuzzy
```

## Usage/Examples

```javascript
import { useFuzzy } from 'react-hook-fuzzy'

const songs = [
    {
        name: "Campfire Song",
        artist: "Spongebob",
    }, 
    {
        name: "Lacrimosa",
        artist: "Mozart",
    }
]

const App = () => {
    const { results, term, search } = useFuzzy(songs, ["title", "artist"]);

    return (
        <>
            <input
                value={term}
                onChange={(e) => {
                    search(e.target.value);
                }}
            />
            {
                results.map(song => <p>{song.title}</p>)
            }
        </>
    )    
}
```

## Options
react-hook-fuzzy provides configuration options through an optional third parameter in the hook

| Option   | description | default |
| -------- | ------- | ------- | 
| caseSensitive  | Fuzzy search should be case sensitive   | false       |
| sort | Fuzzy search will be sorted by closest match     | false       |
| allOnEmpty    | Fuzzy search will return all items if there is not a current search term    | true      |

### Example with options

```javascript
import { useFuzzy } from 'react-hook-fuzzy'

const songs = [
    {
        name: "Campfire Song",
        artist: "Spongebob",
    }, 
    {
        name: "Lacrimosa",
        artist: "Mozart",
    }
]

const App = () => {
    const { results, term, search } = useFuzzy(songs, ["title", "artist"], {
        caseSensitive: true
    });

    return (
        <>
            <input
                value={term}
                onChange={(e) => {
                    search(e.target.value);
                }}
            />
            {
                results.map(song => <p>{song.title}</p>)
            }
        </>
    )    
}
```