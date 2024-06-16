import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { setCategories } from "../../redux/categoriesSlice";
import { getData, putData } from "../../utils/fetch";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import SAlert from "../../components/Alert";

export default function Edit() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const [form, setForm] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(`/cms/categories/${categoryId}`);
        const { name } = response.data.data;

        setForm({
          name,
        });
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  const [alert, setAlert] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await putData(`/cms/categories/${categoryId}`, {
        name: form.name,
      });

      const updatedCategories = categories.map((category) =>
        category._id === categoryId
          ? { ...category, name: form.name }
          : category
      );

      dispatch(setCategories(updatedCategories));
      setIsLoading(true);
      navigate("/categories");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err.res?.data?.msg ?? "Internal Server Error",
      });
    }
  };

  return (
    <main className="w-full m-auto p-5">
      {alert.status && (
        <SAlert
          className="bg-red-100 text-red-600 px-5 py-2 rounded-lg"
          message={alert.message}
        />
      )}
      <h1 className="font-bold text-2xl text-center mb-5">Edit Kategori</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <TextInputWithLabel
          htmlFor="name"
          label="Nama Kategori"
          name="name"
          type="text"
          value={form.name}
          className="text-input mb-6"
          placeholder="Nama Kategori"
          onChange={handleChange}
        />
        <div className="flex justify-center gap-5">
          <SButton
            type="button"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 text-center text-white rounded-lg"
            loading={isLoading}
            disabled={isLoading}
            action={() => navigate("/categories")}
          >
            Batal
          </SButton>
          <SButton
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-center text-white rounded-lg"
            loading={isLoading}
            disabled={isLoading}
          >
            Edit
          </SButton>
        </div>
      </form>
    </main>
  );
}
