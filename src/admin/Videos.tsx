import {VideoPreview} from "../components/VideoPreview";
import { useEffect, useState, type FormEvent } from "react";
import { useAdminAuth } from "./Auth";
import { apiRequest } from "../services/admin";
import { uploadVideo, videoDate, type VideoRow } from "../services/videos";

const blank = () => ({
  title: { uz: "", ru: "", en: "" },
  description: { uz: "", ru: "", en: "" },
  is_published: false,
  sort_order: 0,
});

export function AdminVideos() {
  const { session } = useAdminAuth();
  const token = session!.token;

  const [rows, setRows] = useState<VideoRow[]>([]);
  const [form, setForm] = useState<ReturnType<typeof blank> | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      setRows(await apiRequest<VideoRow[]>("videos", { token }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  function open(row?: VideoRow) {
    setId(row?.id ?? null);
    setForm(
      row
        ? {
            title: { ...row.title },
            description: { ...row.description },
            is_published: row.is_published,
            sort_order: row.sort_order,
          }
        : blank(),
    );
    setFile(null);
    setProgress(0);
    setError("");
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    if (!form) return;

    setBusy(true);
    setError("");

    try {
      let target = id;

      if (!target) {
        if (!file) throw new Error("MP4 video tanlang");
        target = await uploadVideo(file, token, setProgress);
        setId(target);
      }

      await apiRequest(`videos/${target}`, {
        method: "PUT",
        token,
        body: form,
      });

      setForm(null);
      setFile(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Saqlashda xatolik");
    } finally {
      setBusy(false);
    }
  }

  async function remove(row: VideoRow) {
    if (!window.confirm("Video va uning fayli o‘chirilsinmi?")) return;

    setBusy(true);
    setError("");

    try {
      await apiRequest(`videos/${row.id}`, {
        method: "DELETE",
        token,
      });
      if (id === row.id) setForm(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "O‘chirishda xatolik");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="admin-heading">
        <div>
          <span className="admin-kicker">KONTENTNI BOSHQARISH</span>
          <h1>Videolar</h1>
          <p>Videolarni yuklang, tahrirlang va nashr qiling.</p>
        </div>

        <button
          className="admin-primary"
          disabled={busy}
          onClick={() => open()}
        >
          + Video qo‘shish
        </button>
      </div>

      {error && (
        <p className="admin-alert error" role="alert">
          {error}
        </p>
      )}

      {form && (
        <form className="admin-editor" onSubmit={save}>
          <h2>{id ? "Videoni tahrirlash" : "Yangi video"}</h2>

          <fieldset disabled={busy}>
            <div className="admin-fields">
              {(["title", "description"] as const).map((key) => (
                <fieldset className="admin-localized" key={key}>
                  <legend>{key === "title" ? "Video nomi" : "Tavsif"}</legend>

                  <div>
                    {(["uz", "ru", "en"] as const).map((lang) => (
                      <label key={lang}>
                        {lang.toUpperCase()}
                        {key === "title" && lang === "uz" ? " *" : ""}

                        <textarea
                          rows={key === "title" ? 2 : 4}
                          required={key === "title" && lang === "uz"}
                          maxLength={key === "title" ? 200 : 3000}
                          placeholder={
                            key === "title"
                              ? "Video nomini kiriting"
                              : "Video haqida qisqacha yozing"
                          }
                          value={form[key][lang]}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              [key]: {
                                ...form[key],
                                [lang]: e.target.value,
                              },
                            })
                          }
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}

              {!id && (
                <label className="admin-file">
                  Video fayli *
                  <input
                    type="file"
                    accept="video/mp4,.mp4"
                    required
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                  <small>
                    MP4 · 50 MB gacha. H.264 format tavsiya etiladi.
                  </small>
                  {file && (
                    <small>
                      {file.name} · {(file.size / 1024 / 1024).toFixed(1)} MB
                    </small>
                  )}
                </label>
              )}

              <label>
                Tartib raqami
                <input
                  type="number"
                  min="0"
                  max="100000"
                  step="1"
                  required
                  value={form.sort_order}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      sort_order: Number(e.target.value),
                    })
                  }
                />
                <small>Kichik raqamli video oldin ko‘rinadi.</small>
              </label>

              <label className="admin-check">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      is_published: e.target.checked,
                    })
                  }
                />
                Saytda ko‘rsatish — nashr qilish
              </label>
            </div>

            {busy && (
              <p role="status">
                {progress < 100
                  ? `Saqlanmoqda… Yuklash: ${progress}%`
                  : "Yuklandi. Tekshirish va saqlash tugashini kuting…"}
              </p>
            )}

            <div className="admin-actions">
              <button className="admin-primary" type="submit">
                {busy ? "Saqlanmoqda…" : "Saqlash"}
              </button>

              <button type="button" onClick={() => setForm(null)}>
                Bekor qilish
              </button>
            </div>
          </fieldset>
        </form>
      )}

      {loading ? (
        <p className="admin-loading">Yuklanmoqda…</p>
      ) : rows.length === 0 ? (
        <div className="admin-empty">
          Hali video yo‘q. “Video qo‘shish” orqali boshlang.
        </div>
      ) : (
        <div className="admin-records">
          {rows.map((row) => (
            <article className="admin-record" key={row.id}>
              <div className="admin-record-main">
                <span
                  className={`admin-badge ${
                    row.is_published ? "published" : ""
                  }`}
                >
                  {row.is_published ? "Nashr qilingan" : "Qoralama"}
                </span>

                <h3>{row.title.uz}</h3>

                <p>Qo‘shilgan: {videoDate(row.created_at)}</p>
                <p>O‘zgartirilgan: {videoDate(row.updated_at)}</p>

                <VideoPreview src={row.signed_url} title={row.title.uz}/>
              </div>

              <div className="admin-record-actions">
                <button disabled={busy} onClick={() => open(row)}>
                  Tahrirlash
                </button>

                <button
                  className="admin-danger"
                  disabled={busy}
                  onClick={() => remove(row)}
                >
                  O‘chirish
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
