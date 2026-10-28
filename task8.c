#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_EMP 100
#define BASIC_PAY 20000
#define FILENAME "task1.txt"

typedef struct {
    char id[10];
    char name[50];
    char gender[2];
    char position[30];
    int experience;
    float pay;
} Employee;

void printEmployee(Employee tmp) {
    printf("%-8s %-15s %-6s %-20s %d yr(s)   %.0f\n",
           tmp.id, tmp.name, tmp.gender, tmp.position, tmp.experience, tmp.pay);
}

void readData(Employee rec[], int *count) {
    FILE *fp = fopen(FILENAME, "r");
    *count = 0;
    if (!fp) return;

    while (*count < MAX_EMP &&
           fscanf(fp, "%s %s %s %s %d %f",
                  rec[*count].id,
                  rec[*count].name,
                  rec[*count].gender,
                  rec[*count].position,
                  &rec[*count].experience,
                  &rec[*count].pay) == 6) {
        (*count)++;
    }
    fclose(fp);
}

void addRecord(Employee rec[], int *count) {
    if (*count >= MAX_EMP) {
        printf("Maximum employee limit reached.\n");
        return;
    }

    Employee e;
    printf("Enter ID: ");
    scanf("%s", e.id);
    printf("Enter Name (no spaces): ");
    scanf("%s", e.name);
    printf("Enter Gender (M/F): ");
    scanf("%s", e.gender);
    printf("Enter Position (no spaces): ");
    scanf("%s", e.position);
    printf("Enter Experience (years): ");
    scanf("%d", &e.experience);
    printf("Enter Pay: ");
    scanf("%f", &e.pay);

    rec[*count] = e;
    (*count)++;

    FILE *fp = fopen(FILENAME, "a");
    if (fp) {
        fprintf(fp, "%s %s %s %s %d %.0f\n",
                e.id, e.name, e.gender, e.position, e.experience, e.pay);
        fclose(fp);
        printf("Record added successfully.\n");
    } else {
        printf("Error opening file.\n");
    }
}

void searchByID(char id[], Employee rec[], int count) {
    int found = 0;
    for (int i = 0; i < count; i++) {
        if (strcmp(rec[i].id, id) == 0) {
            printf("\n%-8s %-15s %-6s %-20s %-8s %s\n",
                   "ID", "Name", "Gender", "Position", "Exp", "Pay");
            printf("---------------------------------------------------------------\n");
            printEmployee(rec[i]);
            found = 1;
            break;
        }
    }
    if (!found) printf("Record with ID '%s' not found.\n", id);
}

void showAllRecord(Employee rec[], int count) {
    printf("\n%-8s %-15s %-6s %-20s %-8s %s\n",
           "ID", "Name", "Gender", "Position", "Exp", "Pay");
    printf("---------------------------------------------------------------\n");
    for (int i = 0; i < count; i++) {
        printEmployee(rec[i]);
    }
}

void showBelowBasicPay(Employee rec[], int count, int basicpay) {
    printf("\nEmployees with pay below %d:\n", basicpay);
    printf("%-8s %-15s %-6s %-20s %-8s %s\n",
           "ID", "Name", "Gender", "Position", "Exp", "Pay");
    printf("---------------------------------------------------------------\n");
    int found = 0;
    for (int i = 0; i < count; i++) {
        if (rec[i].pay < basicpay) {
            printEmployee(rec[i]);
            found = 1;
        }
    }
    if (!found) printf("No employees below basic pay.\n");
}

int main() {
    Employee records[MAX_EMP];
    int count = 0;

    readData(records, &count);

    int choice;
    do {
        printf("\n==================== MENU ===================\n");
        printf("1. Add a record\n");
        printf("2. Search a record by ID\n");
        printf("3. Show all records\n");
        printf("4. Show employees having pay less than basic pay (%d)\n", BASIC_PAY);
        printf("5. Save and exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addRecord(records, &count);
                break;
            case 2: {
                char searchID[10];
                printf("Enter employee ID to search: ");
                scanf("%s", searchID);
                searchByID(searchID, records, count);
                break;
            }
            case 3:
                showAllRecord(records, count);
                break;
            case 4:
                showBelowBasicPay(records, count, BASIC_PAY);
                break;
            case 5:
                printf("Exiting. Data already saved to file.\n");
                break;
            default:
                printf("Invalid choice. Try again.\n");
        }
    } while (choice != 5);

    return 0;
}
