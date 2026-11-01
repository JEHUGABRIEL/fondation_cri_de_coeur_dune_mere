import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import { ConfirmDialog } from "../../_components/ConfirmDialog";
import { Icon } from "@/components/Icon";
import { db } from "@/db";
import { admins } from "@/db/schema";
import { formatDateTime } from "@/lib/admin/status";
import { requireAdmin } from "@/lib/auth/session";
import { deleteAdmin } from "../../_actions/accounts";
import { ChangePasswordForm, CreateAdminForm, RoleForm } from "../../_components/AccountForms";

export const metadata: Metadata = { title: "Comptes" };

export default async function AccountsPage() {
  const me = await requireAdmin();
  const isSuperadmin = me.role === "superadmin";
  const rows = await db
    .select({
      id: admins.id,
      name: admins.name,
      email: admins.email,
      role: admins.role,
      lastLoginAt: admins.lastLoginAt,
    })
    .from(admins)
    .orderBy(asc(admins.name));

  return (
    <>
      <div className="adm-head">
        <div>
          <h1>Comptes</h1>
          <p>
            Les superadmins gèrent les accès et les rôles. Les administrateurs
            accèdent aux contenus et aux demandes.
          </p>
        </div>
      </div>

      <section className="adm-card">
        <h2>Équipe</h2>
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th scope="col">Personne</th>
                <th scope="col">Rôle</th>
                <th scope="col">Dernière connexion</th>
                <th scope="col">
                  <span className="adm-sr">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <span className="adm-row-title">
                      {row.name}
                      {row.id === me.id ? " (vous)" : ""}
                    </span>
                    <span className="adm-row-sub">{row.email}</span>
                  </td>
                  <td>
                    {isSuperadmin && row.id !== me.id ? (
                      <RoleForm id={row.id} role={row.role} />
                    ) : (
                      <span className="tagpill">
                        {row.role === "superadmin" ? "Superadmin" : "Administrateur"}
                      </span>
                    )}
                  </td>
                  <td>{row.lastLoginAt ? formatDateTime(row.lastLoginAt) : "Jamais"}</td>
                  <td>
                    {row.id === me.id || !isSuperadmin ? null : (
                      <ConfirmDialog
                        action={deleteAdmin}
                        fields={{ id: row.id }}
                        title="Retirer cet accès ?"
                        description="La personne ne pourra plus se connecter au back-office."
                        confirmLabel="Retirer l'accès"
                        trigger={
                          <>
                            <Icon name="trash" size={16} />
                            Retirer
                          </>
                        }
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="adm-grid-2" style={{ marginTop: "1.2rem" }}>
        {isSuperadmin ? (
          <section className="adm-card">
            <h2>Ajouter un compte</h2>
            <CreateAdminForm />
          </section>
        ) : (
          <section className="adm-card">
            <h2>Gestion des comptes</h2>
            <p>
              Seul un superadmin peut créer des comptes ou modifier les rôles.
              Contactez la présidence si vous avez besoin d&apos;un accès
              supplémentaire.
            </p>
          </section>
        )}
        <section className="adm-card">
          <h2>Mon mot de passe</h2>
          <ChangePasswordForm />
        </section>
      </div>
    </>
  );
}
