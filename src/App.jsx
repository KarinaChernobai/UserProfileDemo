import { UserProfile } from "./UserProfile";

function App() {
    return (
        <div>
            <h1>Профіль користувача</h1>
            <UserProfile
                name="Іван Петренко"
                profession="Frontend Developer"
                bio="Спеціалізуюсь на React та сучасному JavaScript. Люблю подорожувати та фотографувати."
                avatar="https://randomuser.me/api/portraits/men/32.jpg"
            />
        </div>
    );
}

export default App;